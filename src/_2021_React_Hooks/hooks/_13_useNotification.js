
export function useNotification (title, opt) {
    if(!("Notification" in window))
        return;

    const fileNotif = () => {
        if(Notification.permission !== "granted"){
            Notification.requestPermission()
                .then((permission)=>{
                    if(permission === "granted")
                        new Notification(title, opt);
                    else
                        return;
                })
        } else
            new Notification(title, opt);
    }
    return fileNotif;
}