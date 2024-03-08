import "../footer-styles.css"
export default function Footer() {
    return (
        <>
    <footer id="contact" className="FooterLast rounded-xl mx-auto  bg-white grid-cols-3 gap-10 p-3 mt-20 mb-6 h-[500px] w-full max-w-[470px] md:max-w-[980px] ">
        <div className="text-4xl mt-10 mx-4 font-medium">
            <h3>Want to work  <span className="text-[#e3c448] font-medium">together?</span></h3>
        </div>
        <div className="gap-10 flex mt-6 flex-col justify-center items-center text-center">
            <form className="space-y-4" id="contact" action="mailto:fedetomassini2@gmail.com" method="post" encType="multipart/form-data">
                <input 
                    className="min-[768px]:mr-2 bg-[#1b1b1b] border-2 border-gray-500 border-dashed focus:border-2 focus:border[#e3c448] focus:outline-none focus:border-dashed focus-visible:border-2 focus:text-[#e3c448] focus:placeholder:text-[#e3c448] hover:border-dashed text-black w-[285px] h-[40px] p-2.5 rounded-md placeholder:text-gray-500 placeholder:text-[14px]" 
                    name="email" 
                    placeholder="Email..."
                    type="text" 
                    required
                />
                <input 
                    className="min-[768px]:ml-2 bg-[#1b1b1b] border-2 border-gray-500 border-dashed focus:border-2 focus:border[#e3c448] focus:outline-none focus:border-dashed focus-visible:border-2 focus:text-[#e3c448] focus:placeholder:text-[#e3c448] hover:border-dashed text-black w-[285px] h-[40px] p-2.5 rounded-md placeholder:text-gray-500 placeholder:text-[14px]" 
                    name="asunto" 
                    placeholder="Asunto..."
                    type="text" 
                    required
                />
                <textarea 
                    className="h-[200px] w-[650px] max-md:w-[285px] bg-[#1b1b1b] border-2 border-gray-500 border-dashed focus:border-2 focus:border[#e3c448] focus:outline-none focus:border-dashed focus-visible:border-2 focus:text-[#e3c448] focus:placeholder:text-[#e3c448] hover:border-dashed text-black p-2.5 rounded-md placeholder:text-gray-500 placeholder:text-[14px] resize-none" 
                    name="detalle" 
                    placeholder="Detalle su propósito de contacto..." 
                    draggable="false"
                    required
                />
            </form>
            <button 
                id="#contact" 
                className="bg-gray-700 w-fit h-[40px] px-10 py-1.5 rounded-md hover:bg-[#e3c448] active:scale-95 transition-all delay-[5ms]"
                type="submit"
                > 
                Enviar
            </button>
        </div>
    </footer>
    </>

    );
}