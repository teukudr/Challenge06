import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectData, fetchData } from "../../features/data/dataSlices";

export default function Results() {
  const data = useSelector(selectData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const formatRP = (price) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    const priceInt = parseInt(price);
    return formatter.format(priceInt);
  };

  return (
    <section id="result" className="container-fluid nabil-container">
      <div>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 align-content-center g-3 pt-4 pt-md-0"
          id="cars-container"
        >
          {data.map((item, index) => (
            <div className="col" key={index}>
              <div
                className="card w-100"
                style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)" }}
              >
                <img
                  src={item.image}
                  className="card-img-top img-fluid"
                  alt={item.manufacture}
                  style={{
                    height: "300px",
                    borderRadius: "3px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body" style={{ fontSize: "14px" }}>
                  <p className="card-title">
                    {item.manufacture} {item.model}
                  </p>
                  <p className="fw-bold">{formatRP(item.rentPerDay)} / hari</p>
                  <p className="card-text" style={{ minHeight: "90px" }}>
                    {item.description}
                  </p>
                  <div className="my-2">{item.capacity} Orang</div>
                  <div className="my-2">{item.transmission}</div>
                  <div className="my-2">Tahun {item.year}</div>
                  <button
                    className="btn btn-success text-white w-100 mt-2 fw-bold mt-4 "
                    style={{ fontSize: "14px" }}
                  >
                    Pilih Mobil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {data.length === 0 && (
          <div>
            <h1 className="text-center">Tidak ada mobil yang tersedia</h1>
          </div>
        )}
      </div>
    </section>
  );
}
