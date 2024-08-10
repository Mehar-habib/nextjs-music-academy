function Footer() {
  return (
    <>
      <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-4 sm:px-4 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-white hover:text-gray-400 pb-2">
              About Us
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi, tenetur nobis. Qui nemo, aliquid harum dicta
              dignissimos sequi ad autem unde animi quia libero? Culpa eos velit
              quis esse dolorem.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white hover:text-gray-400 pb-2">
              Quick Links
            </h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Courses</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white hover:text-gray-400 pb-2">
              Fellow Us
            </h2>
            <div className="space-x-2 font-semibold">
              <span className="">Facebook</span>
              <span className="">Twitter</span>
              <span className="">Instagram</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white hover:text-gray-400 pb-2">
              Contact Us
            </h2>
            <span>Address: 123 Main St, Anytown USA</span>
            <br />
            <span>Phone: 123-456-7890</span>
            <br />
            <span>Email: 7R6bD@example.com</span>
          </div>
        </div>
        <p className="text-center mt-8 text-sm">
          &copy; 2024 Music School. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
