import styles from './ScopedCss.module.css'

const ScopedCss = () => {
  return (
    <div className={styles.scoped}>
        {/* This component demonstrates scoped CSS.
         The styles defined in ScopedCss.css will
          only apply to this component, preventing any
         unintended side effects on other parts of the application. */}
        <h4>Estilo de ScopedCss.module.css definido como estilo local</h4>
        <p>As classes definidas em ScopedCss.module.css são aplicadas apenas ao componente ScopedCss</p> 
        <h3>Este parágrafo, definido com um seletor global, tem estilo definido em ScopedCss.module.css</h3>       
    </div>
  )
}

export default ScopedCss