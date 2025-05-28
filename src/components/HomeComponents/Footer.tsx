const Footer = () => {
  return (
    <footer className="h-[280px]   mt-13 py-10 bg-indigo-700 justify-center flex w-full px-5">
      <div className="container  text-[#FAFAFA] flex justify-between">
        <div className="flex flex-col gap-x-36">
          <div className="flex gap-2 items-center">
            <img src="/images/filmWhite.png" alt="" className="w-5 h-5" />
            <p className=" italic text-[16px] font-bold">Movie Z</p>
          </div>
          <p>© 2024 Movie Z. All Rights Reserved.</p>
        </div>
        <div className="flex gap-24">
          <div className="flex flex-col gap-3">
            <p>Contact Information</p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <img src="/images/email.png" alt="" className="w-4 h-4" />
                <div>
                  <p>Email:</p>
                  <p>support@movieZ.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src="/images/phone.png" alt="" />
                <div>
                  <p>Phone:</p>
                  <p>+976 (11) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p>Follow us</p>
            <div className="flex gap-3">
              <a href="">Facebook</a>
              <a href="">Instagram</a>
              <a href="">Twitter</a>
              <a href="">Youtube</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
