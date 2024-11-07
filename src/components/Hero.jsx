import { motion } from "framer-motion";
import { styles } from "../styles";
//import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex justify-center items-center">
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-5">
        {/* <ComputersCanvas /> */}

        <div className="text-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Krushang</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a <span className="text-[#915EFF]">MERN Stack Developer</span>
            <br />
            Crafting{" "}
            <span className="text-[#915EFF]">
              innovative solutions
            </span> and{" "}
            <span className="text-[#915EFF]">engaging user experiences</span>.
          </p>
        </div>
        <div className="mt-4">
          <motion.button
            className="px-6 py-3 bg-[#a793d4] text-black font-semibold rounded-lg shadow-lg hover:bg-[#a793d4] transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => (window.location.href = "#contact")}
          >
            Get in Touch
          </motion.button>
        </div>
      </div>
      <div className="absolute bottom-30 right-0 mr-8 flex flex-col space-y-10">
        <motion.a
          href="https://www.linkedin.com/in/krushang-savaliya-497668242/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          className="text-white hover:text-[#915EFF] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.788-1.75-1.762s.784-1.762 1.75-1.762 1.75.788 1.75 1.762-.784 1.762-1.75 1.762zm13.5 12.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.868 0-2.155 1.459-2.155 2.968v5.699h-3v-11h2.878v1.504h.042c.4-.757 1.378-1.554 2.837-1.554 3.035 0 3.594 2.008 3.594 4.619v6.431z" />
          </svg>
        </motion.a>
        <motion.a
          href="https://github.com/krushang-07"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          className="text-white hover:text-[#915EFF] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.261.82-.577v-2.174c-3.338.726-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.755-1.333-1.755-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.236 1.839 1.236 1.07 1.835 2.809 1.305 3.494.998.108-.774.419-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.304-.535-1.527.116-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.005.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.648.242 2.872.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.371.814 1.102.814 2.222v3.293c0 .32.216.694.825.576 4.765-1.587 8.202-6.082 8.202-11.383 0-6.627-5.373-12-12-12z" />
          </svg>
        </motion.a>
        <motion.a
          href="https://x.com/home"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          className="text-white hover:text-[#915EFF] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .385.044.76.127 1.122-4.09-.205-7.719-2.165-10.141-5.144-.424.729-.666 1.577-.666 2.482 0 1.71.87 3.213 2.19 4.096-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.697 4.374 3.95 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.318-3.809 2.104-6.115 2.104-.398 0-.79-.023-1.174-.068 2.179 1.397 4.768 2.213 7.548 2.213 9.057 0 14.01-7.507 14.01-14.01 0-.213-.005-.426-.014-.637.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </motion.a>
        <motion.a
          href="https://instagram.com/krushang_7.0"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          className="text-white hover:text-[#915EFF] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.522.069-2.882.35-3.895 1.364-1.013 1.013-1.294 2.373-1.364 3.895-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.069 1.522.35 2.882 1.364 3.895 1.013 1.013 2.373 1.294 3.895 1.364 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.522-.069 2.882-.35 3.895-1.364 1.013-1.013 1.294-2.373 1.364-3.895.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.069-1.522-.35-2.882-1.364-3.895-1.013-1.013-2.373-1.294-3.895-1.364-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.163 2.761-6.163 6.163 0 3.403 2.761 6.163 6.163 6.163s6.163-2.761 6.163-6.163c0-3.403-2.761-6.163-6.163-6.163zm0 10.163c-2.208 0-4-1.792-4-4s1.792-4 4-4 4 1.792 4 4-1.792 4-4 4zm6.406-11.845c-.796 0-1.444-.648-1.444-1.444 0-.796.648-1.444 1.444-1.444.796 0 1.444.648 1.444 1.444 0 .796-.648 1.444-1.444 1.444z" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
