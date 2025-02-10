import React from "react";

const ResumeModal = () => {
  const resume = "/path-to-your-resume/Omar_Bendary_CV.pdf"; // Replace with the actual file path

  return (
    <div>
      {/* Daisy UI Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-dark">
          <h3 className="font-bold text-xl text-white">Download Paper</h3>
          <p className="py-4 text-gray-300">
            Click the button below to download the paper.
          </p>
          <a
            href={resume}
            download="Omar_Bendary_CV"
            className="btn mt-4 bg-primary border-primary text-white hover:bg-dark hover:border-primary hover:border-2 hover:text-primary rounded-full px-8"
          >
            {" "}
            Download paper
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
