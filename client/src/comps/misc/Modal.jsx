import React from "react";
import styles from "./modal.module.css";
import { RxCross2 } from "react-icons/rx";
import { axios } from "../../utils/axios";

const Modal = ({ task, setOpen, refetch, setRefetch }) => {
  const [taskData, setTaskData] = React.useState({ ...task });
  const [files, setFiles] = React.useState([]);

  React.useEffect(() => {
    setTaskData(task);
  }, [task]);

  const handleUpload = async (event) => {
    event.preventDefault();
    if (files?.length < 1) return;

    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const res = await axios.post(`upload?trackId=${task?._id}`, formData);
      setTaskData({ ...taskData, files: [...taskData?.files, ...res?.data] });
      setRefetch(!refetch);
    } catch (error) {
      console.error("Error uploading files:", error);
    }

    // fetch("http://localhost:5000/upload?trackId=" + task?._id, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setTaskData({ ...taskData, files: [...taskData?.files, ...data] });
    //     setRefetch(!refetch);
    //   })
    //   .catch((error) => console.error("Error uploading files:", error));
  };

  return (
    <div className={styles.modal_container} onClick={() => setOpen(false)}>
      <div className={styles.modal_wrapper} onClick={(e) => e.stopPropagation()}>
        <span className={styles.cross} onClick={() => setOpen(false)}>
          <RxCross2 />
        </span>
        <section className={styles.modal_header}>
          <p>Task Id : {taskData?._id}</p>
        </section>
        <section className={styles.modal_body}>
          <div className={styles.input_group}>
            <input
              type="file"
              multiple
              id="file-upload"
              onChange={(e) => setFiles(Array.from(e.target.files))}
            />
            <button className={styles.upload_btn} onClick={handleUpload}>
              Upload
            </button>
          </div>
        </section>
        <section className={styles.modal_footer}>
          <p>Attached Files :</p>
          <ul>
            {taskData?.files?.length > 0 &&
              taskData?.files?.map((file, i) => <li key={i}>{file?.name}</li>)}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Modal;
