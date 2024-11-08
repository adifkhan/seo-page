import React from "react";
import styles from "./task.module.css";
import { RiStackFill } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";
import { PiChatsCircleLight } from "react-icons/pi";
import { GrAttachment } from "react-icons/gr";
import { CgCalendarDates } from "react-icons/cg";

const Task = ({ task, handleAttatchment }) => {
  return (
    <div className={styles.task_wrapper}>
      <div className={styles.client_wrapper}>
        <div className={styles.client_info}>
          <img src="/avatar/client1.png" alt="client" />
          <p>{task?.clientName}</p>
        </div>
        <div className={styles.client_info}>
          <img src="/avatar/client3.png" alt="client" />
          <p>{task?.username}</p>
        </div>
      </div>
      <div className={styles.contents}>
        <div className={styles.left_box}>
          <RiStackFill size={14} />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi natus voluptatibus optio
            recusandae nemo.
          </p>
        </div>
        <div className={styles.right_box}>
          <FaClipboardList size={14} />
          <p>1/2</p>
        </div>
      </div>
      <div className={styles.insights}>
        <div className={styles.avater}>
          <img src="/avatar/client4.png" alt="" height={25} width={25} />
        </div>
        <div className={styles.avater}>
          <img src="/avatar/client5.png" alt="" height={25} width={25} />
        </div>
        <div className={styles.avater}>
          <span>12+</span>
        </div>
        <div className={styles.comments}>
          <PiChatsCircleLight size={16} />
          <span>15</span>
        </div>
        <div className={styles.attatchment}>
          <GrAttachment
            size={16}
            style={{ cursor: "pointer" }}
            onClick={() => handleAttatchment(task)}
          />
          <span>{task?.files?.length ?? 0}</span>
        </div>
        <div className={styles.date}>
          <CgCalendarDates size={16} />
          <span>30-12-2022</span>
        </div>
      </div>
    </div>
  );
};

export default Task;
