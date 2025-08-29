import React from "react";

export default function Certificado({ certificadoRef, certificado}) {
    return(
      <div
        ref={certificadoRef}
        className="bg-white p-8 mt-6 rounded-lg shadow-lg w-full max-w-3xl border font-serif"
      >
        {/* Encabezado */}
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <div>
          <h1 className="text-2xl font-bold uppercase">
            Mecánica Valdebenito EIRL
          </h1>
          <p className="text-sm italic">
            Especialista en Mantención y Reparación de Vehículos
          </p>
          <p className="text-sm">RUT: 76.938.678-5</p>
        </div>
        <Image
          src="/LOGO.png"
          alt="Logo Mecánica Valdebenito"
          width={160}
          height={100}
          priority
        />
      </div>

      {/* Cuerpo */}
      <p className="mb-4">
        Según Orden de Trabajo Nº <strong>{certificado.ordenTrabajo}</strong>, el vehículo
        individualizado fue sometido a una mantención preventiva en nuestro servicio técnico.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p><strong>Marca:</strong> {certificado.marca}</p>
          <p><strong>Modelo:</strong> {certificado.modelo}</p>
          <p><strong>Año:</strong> {certificado.año}</p>
          <p><strong>Chasis:</strong> {certificado.chasis}</p>
          <p><strong>Patente:</strong> {certificado.patente}</p>
          <p><strong>Kilometraje:</strong> {certificado.kilometraje} kms</p>
          <p><strong>Fecha de servicio:</strong> {certificado.fechaServicio}</p>
          <p><strong>Tipo de servicio:</strong> {certificado.tipoServicio}</p>
        </div>
        <div className="flex justify-center items-center">
          <QRCodeCanvas
            value={route('certificado.qr', { id: certificado.id })}
            size={128}
            className="border p-2"
          />
        </div>
      </div>

      <p className="mb-6">
        Certifica que a la fecha, el vehículo descrito se encuentra en óptimas condiciones mecánicas y eléctricas, cumpliendo los estándares exigidos para su operación segura.
      </p>

      {/* Pie */}
      <div className="flex justify-between items-end mt-12">
        {/* Columna izquierda */}
        <div className="w-1/2">
          <p><strong>Certificado emitido:</strong> {certificado.fecha}</p>
          <p className="mt-6">Sin otro particular, saluda atentamente,</p>
        </div>

        {/* Columna derecha (firma centrada dentro de su espacio) */}
        <div className="w-1/2 text-center">

          <Image
            src={route('private.image', { filename: user.avatar })}
            alt="Firma"
            width={150}
            height={60}
            className="mx-auto"
          />
          <p className="font-sans font-semibold mt-2">Sebastian Valdebenito</p>
          <p className="text-sm font-sans">Representante Legal</p>
        </div>
      </div>
    </div>
    );
}
