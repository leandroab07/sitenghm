
const Local = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-lg font-semibold mb-4">
        Endereço: 910, Av. Fernando Ferrari, 514 - Goiabeiras, Vitória - ES, 29075-010
      </h1>
      <div className="w-full max-w-4xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14970.43433728244!2d-40.3048773!3d-20.2750617!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81806b5ccdbb7%3A0x7dab339c8435b04e!2sNGHM%20-%20N%C3%BAcleo%20de%20Gen%C3%A9tica%20Humana%20e%20Molecular!5e0!3m2!1spt-BR!2sbr!4v1709845488707!5m2!1spt-BR!2sbr"
          width="900"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Local;
