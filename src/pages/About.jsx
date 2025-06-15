import GuestLayout from '@/components/layouts/GuestLayout';
import { EnvelopeOpenIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/solid';
import image_1 from '@public/assets/images/about-1.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
 const team = [
  {
   name: 'Leonard Krasner',
   role: 'Senior Designer',
   imageUrl: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
   instagramUrl: '#',
   linkedinUrl: '#',
  },
  {
   name: 'Floyd Miles',
   role: 'Principal Designer',
   imageUrl: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
   instagramUrl: '#',
   linkedinUrl: '#',
  },
  {
   name: 'Emily Selman',
   role: 'VP, User Experience',
   imageUrl: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
   instagramUrl: '#',
   linkedinUrl: '#',
  },
 ];
 return (
  <GuestLayout>
   <section className="relative py-16">
    <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-8">
     <div>
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">We’re changing the way people connect</h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus perspiciatis cum omnis. Exercitationem quasi illo debitis quia possimus ex
       corrupti saepe sit aperiam nihil, omnis illum sunt, eos, quo temporibus voluptatum molestias ad at cum. Quo natus vitae quod expedita iusto!
       Harum eligendi iure sed placeat sunt adipisci ut dicta.
      </p>
     </div>

     <div className="mt-10 lg:mt-0 grid grid-cols-3 gap-6">
      <div className="space-y-6">
       <img src={image_1} alt="Illustration representing connection and collaboration" className="rounded-xl shadow-lg" />
       <img src={image_1} alt="Illustration representing connection and collaboration" className="rounded-xl shadow-lg" />
      </div>

      <div className="space-y-6 pt-12">
       <img src={image_1} alt="Illustration representing connection and collaboration" className="rounded-xl shadow-lg" />
       <img src={image_1} alt="Illustration representing connection and collaboration" className="rounded-xl shadow-lg" />
      </div>

      <div className="space-y-6">
       <img src={image_1} alt="Illustration representing connection and collaboration" className="rounded-xl shadow-lg" />
       <img src={image_1} alt="Illustration representing connection and collaboration" className="rounded-xl shadow-lg" />
      </div>
     </div>
    </div>
   </section>
   <section className="bg-white dark:bg-gray-900 py-16 px-6 lg:px-8">
    <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
     <div className="col-span-2 lg:col-span-1">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get in touch</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300 text-justify">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quibusdam, mollitia nemo reprehenderit adipisci asperiores repellendus, quidem
       aliquid unde doloremque animi quos sed praesentium iusto.
      </p>
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.838528281903!2d112.79538107587992!3d-7.259210671320009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f900019418ef%3A0xe5dfade1f48aadae!2sAryu%20Animation%20%2F%20Minilemon!5e0!3m2!1sid!2sid!4v1750009053416!5m2!1sid!2sid"
       width="100%"
       height="250"
       style={{ border: 0 }}
       allowFullScreen
       loading="lazy"
       referrerPolicy="no-referrer-when-downgrade"
       className="mt-5 lg:mt-0"
      />
     </div>

     {/* Kanan - Form */}
     <form className="space-y-6 col-span-2 lg:col-span-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
       <div>
        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
         First name
        </label>
        <input
         type="text"
         id="first-name"
         name="first-name"
         className="mt-1 block w-full rounded-md border-2 border-third/80 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:ring-third focus:border-third sm:text-sm p-2"
        />
       </div>
       <div>
        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
         Last name
        </label>
        <input
         type="text"
         id="last-name"
         name="last-name"
         className="mt-1 block w-full rounded-md border-2 border-third/80 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:ring-third focus:border-third sm:text-sm p-2"
        />
       </div>
      </div>

      <div>
       <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Email
       </label>
       <input
        type="email"
        id="email"
        name="email"
        className="mt-1 block w-full rounded-md border-2 border-third/80 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:ring-third focus:border-third sm:text-sm p-2"
       />
      </div>

      <div>
       <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Phone number
       </label>
       <input
        type="tel"
        id="phone"
        name="phone"
        className="mt-1 block w-full rounded-md border-2 border-third/80 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:ring-third focus:border-third sm:text-sm p-2"
       />
      </div>

      <div>
       <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Message
       </label>
       <textarea
        rows="4"
        id="message"
        name="message"
        className="mt-1 block w-full rounded-md border-2 border-third/80 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:ring-third focus:border-third sm:text-sm p-2"
       ></textarea>
      </div>

      <div className="text-right">
       <button
        type="submit"
        className="inline-flex justify-center rounded-md bg-third px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-third/80 focus:outline-none focus:ring-2 focus:ring-third/60"
       >
        Send message
       </button>
      </div>
     </form>
     <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-base text-gray-700 dark:text-gray-300 col-span-2">
      <a
       href="https://www.google.com/maps?q=1234+Street+Name,+City,+State,+12345"
       target="_blank"
       rel="noopener noreferrer"
       className="flex items-center space-x-3 p-4 rounded-xl shadow hover:shadow-lg bg-white dark:bg-gray-800 transition justify-center"
      >
       <MapIcon className="w-10 h-10 text-third" />
       <p>Jl. Mulyosari Timur No.42, Kalisari, Kec. Mulyorejo, Surabaya, Jawa Timur</p>
      </a>

      <a
       href="https://wa.me/6289538423782"
       className="flex items-center space-x-3 p-4 rounded-xl shadow hover:shadow-lg bg-white dark:bg-gray-800 transition justify-center"
      >
       <PhoneIcon className="w-6 h-6 text-third" />
       <p>+6289538423782</p>
      </a>
      <a
       href="mailto:hello@example.com"
       className="flex items-center space-x-3 p-4 rounded-xl shadow hover:shadow-lg bg-white dark:bg-gray-800 transition justify-center"
      >
       <EnvelopeOpenIcon className="w-6 h-6 text-third" />
       <p>hello@example.com</p>
      </a>
     </div>
    </div>
   </section>
   <section className="bg-gray-50 dark:bg-gray-900 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
     <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Meet our team</h2>
     <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-gray-300 ">
      We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
     </p>

     <div className="mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
      {team.map((person, index) => (
       <div key={index} className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg text-center">
        <img className="mx-auto h-24 w-24 rounded-full object-cover" src={person.imageUrl} alt={person.name} />
        <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{person.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{person.role}</p>

        <div className="mt-4 flex justify-center gap-5">
         <a href={person.instagramUrl} className="text-gray-400 hover:text-third">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
         </a>
         <a href={person.linkedinUrl} className="text-gray-400 hover:text-third">
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
         </a>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>
  </GuestLayout>
 );
};

export default About;
