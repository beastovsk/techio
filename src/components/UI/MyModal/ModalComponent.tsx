import React, { FC, ReactNode } from "react";
import s from "./ModalComponent.module.scss";
import { Modal } from "antd";

interface ModalComponentProps {
	children: ReactNode;
	title?: string;
	open: boolean;
	setOpen: (isModalOpen: boolean) => void;
	width?: number;
}

export const ModalComponent: FC<ModalComponentProps> = ({
	children,
	title,
	open,
	setOpen,
	width,
}) => {
	return (
		<Modal
			title={title}
			open={open}
			onOk={() => setOpen(false)}
			onCancel={() => setOpen(false)}
			width={width}
			footer={[]}
		>
			{children}
		</Modal>
	);
};
