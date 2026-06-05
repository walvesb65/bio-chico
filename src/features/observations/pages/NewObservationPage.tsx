import { CheckCircle2, Save } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useApp } from "../../../app/providers/AppProvider";
import { Button } from "../../../components/Button/Button";
import { Header } from "../../../components/Header/Header";
import styles from "../../../styles/page.module.css";
import { plantsMock } from "../../plants/data/plants.mock";

export function NewObservationPage() {
  const navigate = useNavigate();
  const { addObservation } = useApp();
  const [plantId, setPlantId] = useState(plantsMock[0].id);
  const [local, setLocal] = useState("");
  const [data, setData] = useState(new Date().toISOString().slice(0, 10));
  const [ambiente, setAmbiente] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const selectedPlant = useMemo(
    () => plantsMock.find((plant) => plant.id === plantId) ?? plantsMock[0],
    [plantId],
  );

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setPreview(URL.createObjectURL(file));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const created = addObservation({
      plantaId: selectedPlant.id,
      nomePlanta: selectedPlant.nomePopular,
      imagem: preview ?? selectedPlant.imagem,
      local,
      data,
      ambiente,
      descricao,
    });

    setSaved(true);
    window.setTimeout(() => navigate(`/observations/${created.id}`), 650);
  }

  return (
    <div className={styles.page}>
      <Header
        title="Registrar observacao"
        subtitle="Adicione local, ambiente e uma descricao visualmente."
        showBack
      />

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.field}>
          <span>Planta observada</span>
          <select value={plantId} onChange={(event) => setPlantId(event.target.value)}>
            {plantsMock.map((plant) => (
              <option key={plant.id} value={plant.id}>
                {plant.nomePopular}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.uploadBox}>
          {preview ? (
            <img src={preview} alt="Imagem da observacao" />
          ) : (
            <span>
              <strong>Adicionar foto</strong>
              <p className={styles.helperText}>Upload visual, sem envio real nesta etapa.</p>
            </span>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            hidden
          />
        </label>

        <label className={styles.field}>
          <span>Local</span>
          <input
            type="text"
            value={local}
            onChange={(event) => setLocal(event.target.value)}
            placeholder="Ex.: margem do rio, praca, trilha"
            required
          />
        </label>

        <label className={styles.field}>
          <span>Data</span>
          <input
            type="date"
            value={data}
            onChange={(event) => setData(event.target.value)}
            required
          />
        </label>

        <label className={styles.field}>
          <span>Ambiente</span>
          <input
            type="text"
            value={ambiente}
            onChange={(event) => setAmbiente(event.target.value)}
            placeholder="Ex.: area urbana, mata ciliar, caatinga"
            required
          />
        </label>

        <label className={styles.field}>
          <span>Descricao</span>
          <textarea
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
            placeholder="Anote folhas, flores, frutos, porte e contexto."
            required
          />
        </label>

        {saved ? (
          <div className={styles.success}>
            <CheckCircle2 size={18} aria-hidden="true" /> Observacao registrada.
          </div>
        ) : null}

        <Button
          fullWidth
          type="submit"
          icon={<Save size={20} aria-hidden="true" />}
        >
          Salvar observacao
        </Button>
      </form>
    </div>
  );
}
