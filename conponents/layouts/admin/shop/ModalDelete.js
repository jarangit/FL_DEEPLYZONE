import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ModalDelete = ({setopen}) => {
  return (
    <div id="myModal" className="modal">
      <div class="modal-content">
        <FontAwesomeIcon icon={faTrashAlt} color = "#00c3cb" size="4x" />
        <p>คุณค้องการลบร้านค้านี้หรือไม่ ?</p>
        <div className="modal_box_but">
          <button className="but_comfrim">ยืนยัน</button>
          <button className="but_cencel" onClick={() => setopen(false)} >ยกเลิก</button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
