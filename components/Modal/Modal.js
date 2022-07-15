import { useState } from 'react'
import ClientOnlyPortal from './ClientOnlyPortal'
import styles from './Modal.module.scss'
import FormPriemOrder from "../Form/FormPriemOrder";
import FormPriemOrderModal from "../Form/FormPriemOrderModal";


export const ModalButton = ({action}) => {
	const handleOpen = action.bind(this)
	return(
		<a className={'button button-primary'} onClick={() => handleOpen()}>
			Запись на прием
		</a>
	)
}
export default function Modal({action}) {
	const [open, setOpen] = useState()

	return (
		<>
			<ModalButton action={() => setOpen(true)}/>
			{open && (
				<ClientOnlyPortal selector="#modal">
					<div className={styles.backdrop} onClick={() => setOpen(false)}>

						<style jsx>{`
              :global(body) {
                overflow: hidden;
              }
             
              
            `}</style>
					</div>
					<div className={styles.modal}>
						<FormPriemOrderModal />

						{/*<button type="button" onClick={() => setOpen(false)}>*/}
						{/*	Close Modal*/}
						{/*</button>*/}
					</div>
				</ClientOnlyPortal>
			)}
		</>
	)
}