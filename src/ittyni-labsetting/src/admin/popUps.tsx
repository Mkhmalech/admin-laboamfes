import React from 'react'
import { Button } from '../common/settingStyle'

export const PopUp: React.FC<any> = (props) => {

    return (
        <div className="modal1">
            <section style={{textAlign: "center"}}>
                  <header className="modal__header1">
                      <h1>{props.title}</h1>
                  </header>
                  <section className="modal__content">
                       {props.children}
                  </section>
            </section>
            <section className="modal__actions">
                
               {props.canCancel && (<button className="btnPOP" onClick={props.onCancel}>
                   Annuler
               </button>)}
               {props.canConfirm && <button className="btnPOP" onClick={props.onConfirm}>Confirmer</button>}
            </section>
        </div>
    )
}