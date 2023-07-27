import logo from "@/assets/react.svg"

const Footer = () => {
  return (
    <footer className="bg-primary-10 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={logo} alt="logo" />
                <p classNamr="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa laboriosam placeat esse ullam exercitationem inventore eum rerum sed harum!</p>
                <p>@ All Rights Reserve </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Fitness tips</p>
                <p className="my-5">Day to day update tips</p>
                <p>Exercise habits</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">All time open for contact us</p>
                <p className="my-5">hmdabdulla121@gmail.com</p>
                <p>+8801761112716</p>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer;