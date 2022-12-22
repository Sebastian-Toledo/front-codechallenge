import React from "react";
import CreateCard from "components/atoms/CreateCard";

const CLASIFICADORES_PRIMARIOS = [
  {
    label: "Clasificador Institucional",
    links: "clasificadores_primarios/clasificador_institucional",
  },
  {
    label: "Estructura Programática",
    links: "clasificadores_primarios/estructura_programática",
  },
  {
    label: "Recursos por Rubro",
    links: "clasificadores_primarios/recursos_por_rubro",
  },
  {
    label: "Gastos por Objeto",
    links: "clasificadores_primarios/gastos_por_objeto",
  },
  {
    label: "Fuentes de Financiamiento",
    links: "clasificadores_primarios/fuentes_de_financiamiento",
  },
];

const CLASIFICADORES_AGREGADOS = [
  {
    label: "Recursos por Origen y Procedencia",
    links: "clasificadores_primarios/recursos_por_origen_y_procedencia",
  },
  {
    label: "Recursos por Carácter Económico",
    links: "clasificadores_primarios/recursos_por_caracter_económico",
  },
  {
    label: "Gastos por Finalidad y Función",
    links: "clasificadores_primarios/gastos_por_finalidad_y_función",
  },
  {
    label: "Gastos por Carácter Económico",
    links: "clasificadores_primarios/gastos_por_carácter_conómico",
  },
];

const CAUSAS_DE_DESVIOS = [
  {
    label: "Financieras",
    links: "causas_de_desvíos/financieras",
  },
  {
    label: "Operativas",
    links: "causas_de_desvíos/operativas",
  },
  {
    label: "Conclusiones",
    links: "causas_de_desvíos/conclusiones",
  },
];

const TABLAS_REFENCIALES = [
  {
    label: "Unidades de Medida",
    links: "tablas_refenciales/unidades_de_medida",
  },
  {
    label: "Gastos Prioritarios",
    links: "tablas_refenciales/gastos_prioritarios",
  },
  {
    label: "Motivos Reglas Presupuestarias",
    links: "tablas_refenciales/motivos_reglas_presupuestarias",
  },
];

const VOID = [];

const BodyofCards = () => {
  return (
    <div className="body-cards">
      <div>
        <CreateCard
          links={VOID}
          label="Nuevo Ejercicio"
          description="Generar el nuevo Ejercicio fiscal para formular el Presupuesto."
        />
      </div>
      <div>
        <CreateCard
          links={VOID}
          label="Anteproyecto"
          description="Administrar la información de Anteproyectos."
        />
      </div>
      <div>
        <CreateCard
          links={CLASIFICADORES_PRIMARIOS}
          label="Clasificadores Primarios"
          description="Administrar la información de los clasificadores primarios."
        />
      </div>
      <div>
        <CreateCard
          links={CLASIFICADORES_AGREGADOS}
          label="Clasificadores Agregados"
          description="Administrar la información de los Clasificadores Agregados."
        />
      </div>
      <div>
        <CreateCard
          links={VOID}
          label="Reglas Presupuestarias "
          description="Administrar la información de Reglas Presupuestarias para la etapa de Formulación y Programación."
        />
      </div>
      <div>
        <CreateCard
          links={VOID}
          label="Categorías Programáticas"
          description="Administrar la información de Categorías Programáticas."
        />
      </div>
      <div>
        <CreateCard
          links={VOID}
          label="Unidades Ejecutoras"
          description="Administrar la información de Unidades Ejecutoras."
        />
      </div>
      <div>
        <CreateCard
          links={CAUSAS_DE_DESVIOS}
          label="Causas de Desvíos"
          description="Administrar la información de las Causas Operativas, Financieras y conclusiones."
        />
      </div>
      <div>
        <CreateCard
          links={TABLAS_REFENCIALES}
          label="Tablas Refenciales"
          description="Administrar la información de las Tablas Referenciales del Módulo Presupuesto."
        />
      </div>
    </div>
  );
};

export default BodyofCards;
