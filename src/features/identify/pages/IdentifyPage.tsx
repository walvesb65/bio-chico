import { Camera, ImagePlus, Sparkles } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

import { Button } from "../../../components/Button/Button";
import { Header } from "../../../components/Header/Header";
import styles from "../../../styles/page.module.css";

export function IdentifyPage() {
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState("Aguardando imagem para analise futura.");

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
    setStatus("Imagem carregada. O resultado sera integrado a uma API futura.");
  }

  return (
    <div className={styles.page}>
      <Header
        title="Identificar planta"
        subtitle="Selecione uma foto para preparar a identificacao."
      />

      <label className={styles.uploadBox}>
        {preview ? (
          <img src={preview} alt="Imagem selecionada para identificacao" />
        ) : (
          <span>
            <ImagePlus size={38} aria-hidden="true" />
            <strong>Selecionar imagem</strong>
            <p className={styles.helperText}>Foto da folha, flor, fruto ou planta inteira.</p>
          </span>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          hidden
        />
      </label>

      <section className={styles.resultBox}>
        <p className={styles.eyebrow}>Resultado</p>
        <h2>
          <Sparkles size={19} aria-hidden="true" /> Identificacao futura
        </h2>
        <p className={styles.muted}>{status}</p>
      </section>

      <Button
        fullWidth
        variant="secondary"
        disabled={!preview}
        icon={<Camera size={20} aria-hidden="true" />}
        onClick={() =>
          setStatus("Analise simulada concluida. Integre aqui a API de identificacao.")
        }
      >
        Simular analise
      </Button>
    </div>
  );
}
