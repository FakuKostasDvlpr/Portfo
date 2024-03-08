"use client"
import { useRef} from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "../footer-styles.css"
import { RevealWrapper } from  'next-reveal'

export default function Footer() {
    const form = useRef();

    const sendEmail = () => {
        emailjs
            .sendForm("service_4d8ctbh", "template_kh59uqe", form.current, {
                publicKey: "GtxtKtnik5RRD0-yq",
            })
            .then(
                () => {
                    Swal.fire({
                        timer: 1750,
                        timerProgressBar: true,
                        text: "Se envió el e-mail correctamente",
                        icon: 'success',
                        showConfirmButton: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        allowOutsideClick: false,
                        heightAuto: true,
                        width: 425,
                        background: "#232924",
                        color: "#8B97A2"
                    })
                },
                (error) => {
                    alert(error);
                }
            );
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateName = (name) => {
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userName = form.current.user_name.value.trim();
        const userEmail = form.current.user_email.value.trim();

        if (!validateName(userName)) {
            Swal.fire({
                position: "top",
                icon: "info",
                title: "Ingresa un nombre Valido",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'my-custom-alert',
                }
            });
            return;
        }

        if (!validateEmail(userEmail)) {
            Swal.fire({
                position: "top",
                icon: "warning",
                title: "Ingresa un Email Valido",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'my-custom-alert',
                }
            });
            return;
        }
        sendEmail();
    };

    return (
        <>
        <RevealWrapper delay={300} distance="50px" duration={1000} easing='cubic-bezier(0.5, 0, 0, 1)' origin="bottom" reset={true}> 
        <footer id="contact" className="reveal-bottom FooterLast rounded-xl mx-auto  bg-white grid-cols-3 gap-10 p-3 mt-20 mb-6 h-[500px] w-full max-w-[470px] md:max-w-[980px] ">
            <div className="text-4xl mt-10 mx-4 font-medium">
                <h3>Want to work  <span className="text-[#e3c448] font-medium">together?</span></h3>
            </div>
            <div className="gap-6 flex mt-6 flex-col justify-center items-center text-center">
                <form onSubmit={handleSubmit} ref={form} className="space-y-4 gap-x-4" id="contact" action="mailto:facucostas07@gmail.com" method="post">
                    <input 
                        className="min-[768px]:ml-2 mx-12 bg-[#1b1b1b] border-2 border-gray-500 border-dashed focus:border-2 focus:border[#e3c448] focus:outline-none focus:border-dashed focus-visible:border-2 focus:text-[#e3c448] focus:placeholder:text-[#e3c448] hover:border-dashed text-[#e3c448] w-[285px] h-[40px] p-2.5 rounded-md placeholder:text-gray-500 placeholder:text-[14px]" 
                        name="user_name" 
                        placeholder="Name"
                        type="text"
                        required
                    />
                    <input 
                        className="min-[768px]:mr-2 bg-[#1b1b1b] border-2 border-gray-500 border-dashed focus:border-2 focus:border[#e3c448] focus:outline-none focus:border-dashed focus-visible:border-2 focus:text-[#e3c448] focus:placeholder:text-[#e3c448] hover:border-dashed text-[#e3c448] w-[285px] h-[40px] p-2.5 rounded-md placeholder:text-gray-500 placeholder:text-[14px]" 
                        name="user_email"
                        placeholder="Email..."
                        type="text" 
                        required
                    />
                    <textarea 
                        className="h-[200px] w-[650px] max-md:w-[285px] bg-[#1b1b1b] border-2 border-gray-500 border-dashed focus:border-2 focus:border[#e3c448] focus:outline-none focus:border-dashed focus-visible:border-2 focus:text-[#e3c448] focus:placeholder:text-[#e3c448] hover:border-dashed text-[#e3c448] p-2.5 rounded-md placeholder:text-gray-500 placeholder:text-[14px] resize-none" 
                        name="message" 
                        placeholder="Detalle su propósito de contacto..." 
                        draggable="false"
                        required
                    />
                </form>
                <button 
                    id="#contact" 
                    className="bg-white w-fit h-[40px] px-10 py-1.5 rounded-md hover:bg-[#e3c448] active:scale-95 transition-all delay-[5ms]"
                    type="submit"
                    onClick={handleSubmit}
                > 
                    Enviar
                </button>
            </div>
        </footer>
        </RevealWrapper>
        </>
    );
}
