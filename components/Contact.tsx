import Link from "next/link";

export default function Contact() {
    
    return(
        <div className="border-b border-neutral-900 pb-20">

            <h1 className="my-10 text-center text-4xl ">
                Get in Touch
            </h1>

            <div className="text-center tracking-tighter">
                <p className="my-4">
                    Pune, India
                </p>
                <p className="my-4">
                   +91 7745011040

                </p>
                <a href="#" className="underline ">
                    indraneelsarode@gmail.com
                </a>

            </div>
        </div>
    )
}