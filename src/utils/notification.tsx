import { notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";

type NotificationType = "success" | "info" | "warning" | "error";

notification.config({
	maxCount: 1,
	duration: 5,
});
export const customNotification = (
	type: NotificationType,
	placement: NotificationPlacement,
	title: string,
	text: string[] | string,
	e?: unknown
) => {
	notification[type]({
		message: title,
		description: text,
		placement,
	});
};
