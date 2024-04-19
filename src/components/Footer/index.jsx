const Footer = () => {
  const proverb = "“<i>La vie est un voyage, pas une destination.</i>” - Gaston";

  return (
    <div>
      <footer className="bg-gray-100 font-poppins">
        <div className="mx-auto max-w-5xl px-4 text-center  py-16 sm:px-6 lg:px-8">
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-gray-500" dangerouslySetInnerHTML={{ __html: proverb }}></p> 
          <p>&copy; Copyright 2024, by Kevine_dev. Tous droits reserves.</p>
        </div>
       
      </footer>
    </div>
  );
};

export default Footer;
