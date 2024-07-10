const Footer = () => {
  const proverb = "“<i>La vie est un voyage, pas une destination.</i>” - Gaston";

  return (
    <div>
      <footer className=" bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-8  text-center sm:px-6 lg:px-8">
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-gray-800" dangerouslySetInnerHTML={{ __html: proverb }}></p> 
          <p>&copy; Copyright 2024, by Kevine_dev. Tous droits reserves.</p>
        </div>
       
      </footer>
    </div>
  );
};

export default Footer;
