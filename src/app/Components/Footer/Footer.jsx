import { Button, Input } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="bg-[#041124] md:px-32 px-10 md:py-10">
        <div className="w-full">
          <div className="flex flex-wrap justify-between items-center md:grid lg:py-8 md:grid-cols-5">
            <div className="mt-4 md:mt-0">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Company</h2>
                <ul className="text-[#96999F] font-medium">
                    <li className="mb-4">
                        <a href="#" className=" hover:underline">About</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Contacts</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Location</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Use Cases</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Partners</a>
                    </li>
                </ul>
            </div>
            <div className="mt-4 md:mt-0">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">Platform</h2>
                <ul className="text-[#96999F] font-medium">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Platform</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Community</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Blog</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Products</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Tutorials</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Help Center</a>
                    </li>
                </ul>
            </div>
            <div className="mt-4 md:mt-0">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">Service</h2>
                <ul className="text-[#96999F] font-medium">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Documentation</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Changelog</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Status</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">API Reference</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Languge</a>
                    </li>
                </ul>
            </div>
            <div className="mt-4 md:mt-0">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">Social</h2>
                <ul className="text-[#96999F] font-medium">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Instagram</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">LinkedIn</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">X</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Thread</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Facebook</a>
                    </li>
                </ul>
            </div>
            <div className="mt-4 md:mt-0">
                <h2 className="md:mb-6 text-sm font-semibold text-white uppercase">Stay Updated</h2>
                <Input
                   type="email"
                   label="Email"
                   placeholder="E-mail Address..."
                   labelPlacement="outside"
                   endContent={
                    <Button color="primary" size="sm">Subscribe</Button>
                   }
                />
                <p className="my-2 md:mt-8 text-[#96999F] text-justify">It is a long established fact that a reader will be distracted by the readable content of</p>
            </div>
        </div>
        <div className="px-4 py-6 bg-[#041124]border border-t-1 border-gray-400 md:flex md:items-center md:justify-center">
            <span className="text-sm text-[#96999F] sm:text-center">
              @2023 talt.ai. All right reserved
            </span>
          </div>
        </div>
    </footer>

  );
};

export default Footer;