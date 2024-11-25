import React from "react";

const ResumeModal = () => {
  return (
    <div>
      {/* Daisy UI Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-slate-50">
          <h3 className="font-bold text-lg">Download My Resume</h3>
          <p className="py-4">Click the button below to download my CV.</p>
          <a
            // href="public/Omar Bendary's CV.pdf"
            download
            className="btn mt-4 bg-[#8B6FC4] text-white hover:bg-[#7257A0] hover:text-white"
          >
            Download CV
          </a>
        </div>
        {/* Close button */}
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ResumeModal;
