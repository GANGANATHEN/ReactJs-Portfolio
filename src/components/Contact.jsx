import React from 'react';
import { styles } from "../styles";
import { useForm, ValidationError } from '@formspree/react';
import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";

function ContactForm() {
  
  const [state, handleSubmit] = useForm("mgvwlylr");
  if (state.succeeded) {
      return <>
      <div
      className={`xl:mt-12 flex xl:flex-col flex-col-reverse gap-10 overflow-hidden ${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <p className='text-center'>Thanks for sending Message...!</p>
        <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] p-8 rounded-2xl'
      >
          <EarthCanvas />
        </motion.div>
      </div>
      </>;
      
  }
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden ${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.5] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form onSubmit={handleSubmit}
      className='mt-12 flex flex-col gap-8 p-10'
      >
        <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              placeholder="What's your good name?"
              className='bg-tertiary py-6 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
        <label className='flex flex-col' htmlFor="email">
          <span className='text-white font-medium'>Your email</span>
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="What's your web address?"
          className='bg-tertiary py-6 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Message</span>
        </label>
        <textarea
          rows={7}
          id="message"  
          name="message"
          placeholder='What you want to say?'
          className='bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}
          className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
        >
          Send
        </button>
      </form>
        
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
}

const Contact = () => {
  return (
    <>
      <ContactForm />
    </>
  );
}

export default Contact;