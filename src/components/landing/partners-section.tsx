const partners = [
  "Aditya Birla Health",
  "Axis Max Life",
  "Bajaj Allianz",
  "HDFC ERGO",
  "HDFC Life",
  "ICICI Lombard",
  "ICICI Prudential",
  "Kotak Life",
  "LIC of India",
  "Manipal Cigna",
  "Niva Bupa",
  "PNB MetLife",
  "Reliance General",
  "SBI General",
  "SBI Life",
  "Star Health",
  "Tata AIA",
  "Tata AIG",
  "New India Assurance",
  "United India",
  "Digit General",
  "Future Generali",
  "Chola MS",
  "Royal Sundaram",
  "Oriental Insurance",
  "Liberty General",
  "IFFCO Tokio",
  "Edelweiss Life",
  "Aviva Life",
  "Canara HSBC",
];

export function PartnersSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="bb-container text-center">
        <h2 className="text-2xl font-bold text-[#1a3a6b] md:text-3xl">
          Our Partners
        </h2>
        <p className="mt-2 text-sm text-[#6a8099] md:text-base">
          Leading insurers for your financial freedom
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
          {partners.map((name) => (
            <div
              key={name}
              className="flex h-14 items-center justify-center rounded-lg border border-[#e8edf5] bg-[#f8faff] px-2"
            >
              <span className="text-center text-[11px] font-semibold leading-tight text-[#4a5568]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
