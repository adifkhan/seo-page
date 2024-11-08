import React from "react";
import TaskCategory from "./TaskCategory";
import styles from "./task.module.css";
import Modal from "../misc/Modal";
import { axios } from "../../utils/axios";

const TaskGallery = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [refetch, setRefetch] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState({});
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getAttachments = async () => {
      try {
        const res = await axios.get("get-data");

        setData(res?.data);
      } catch (error) {
        console.error("Error :", error);
      }
    };
    getAttachments();
  }, [refetch]);

  const handleAttatchment = (task) => {
    setSelectedTask(task);
    setOpenModal(true);
  };

  return (
    <div className={styles.gallary_wrapper}>
      {/* modal open */}
      {openModal && selectedTask?._id && (
        <Modal
          task={selectedTask}
          setOpen={setOpenModal}
          refetch={refetch}
          setRefetch={setRefetch}
        />
      )}
      <div className={styles.task_gallery}>
        {data?.map((category) => (
          <TaskCategory
            key={category?.categoryId}
            category={category}
            handleAttatchment={handleAttatchment}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskGallery;
