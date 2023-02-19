import React from 'react'
import styles from './SectionTitle.module.css'

function SectionTitle(props) {
/* props.text: text for title */
  return (
    <div className={styles.container}>
        <h1 className={styles.text}>
            {props.text}
        </h1>
    </div>
  )
}

export default SectionTitle