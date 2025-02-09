const Button = () => {
  const handleScroll = () => {
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    const drawerCheckbox = document.getElementById("my-drawer-3");
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  return (
    <div className="flex justify-center">
      <button
        className="btn btn-outline sm:w-[188px] h-[52px] rounded-[20px] bg-dark text-primary font-semibold text-[18px] leading-4 2xl:hover:bg-primary hover:bg-primary w-40 hover:text-dark "
        onClick={handleScroll}
      >
        Hire Us
      </button>
    </div>
  );
};

export default Button;
