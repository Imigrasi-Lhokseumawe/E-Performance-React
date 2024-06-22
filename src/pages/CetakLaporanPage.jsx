import React, { useEffect, useState } from "react";

const CetakLaporanPage = () => {
  const [data, setData] = useState({
    lalintalkim: [],
    inteldakim: [],
    tikkim: [],
    tataUsaha: [],
  });

  useEffect(() => {
    const storedData = localStorage.getItem("filteredData");
    if (storedData) {
      setData(JSON.parse(storedData));
      window.print();
    }
  }, []);

  const { lalintalkim, inteldakim, tikkim, tataUsaha } = data;

  const formatCurrency = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const renderTable = (data, title) => (
    <div className="section container-fluid table printable">
      <h5 className="card-title">{title}</h5>
      <table className="table datatable">
        <thead>
          <tr>
            <th>
              <b>No</b>
            </th>
            <th style={{ textAlign: "center" }}>Kinerja</th>
            <th style={{ textAlign: "center" }}>Jumlah Target Kinerja</th>
            <th style={{ textAlign: "center" }}>Output</th>
            <th style={{ textAlign: "center" }}>Realisasi Anggaran</th>
            <th style={{ textAlign: "center" }}>Sisa Ketersediaan Anggaran</th>
            <th style={{ textAlign: "center" }}>Periode</th>
            <th style={{ textAlign: "center" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item.id}>
                <td style={{ textAlign: "center" }}>{index + 1}</td>
                <td style={{ textAlign: "center" }}>{item.kegiatan}</td>
                <td style={{ textAlign: "center" }}>{item.jumlah}</td>
                <td style={{ textAlign: "center" }}>{item.output}</td>
                <td style={{ textAlign: "center" }}>
                  {formatCurrency(item.anggaran)}
                </td>
                <td style={{ textAlign: "center" }}>
                  {formatCurrency(item.sisaAnggaran)}
                </td>
                <td style={{ textAlign: "center" }}>{item.periode}</td>
                <td style={{ textAlign: "center" }}>
                {item.isAccept === null ? "Process" : item.isAccept ? "Accepted" : "Reject"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: "center" }}>
                Tidak terdapat data yang tersimpan
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      {renderTable(lalintalkim, "Laporan Kinerja Lalintalkim")}
      {renderTable(inteldakim, "Laporan Kinerja Inteldakim")}
      {renderTable(tikkim, "Laporan Kinerja Tikkim")}
      {renderTable(tataUsaha, "Laporan Kinerja Tata Usaha")}
    </div>
  );
};

export default CetakLaporanPage;
