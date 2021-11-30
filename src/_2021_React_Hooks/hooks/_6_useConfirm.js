export function useConfirm(msg = "", onCofirm, onCancel) {
    if(typeof onCofirm !== "function")
        return;
    if(typeof onCancel !== "function")
        return;

    const confirmAction = () =>{
        if(window.confirm(msg))
            onCofirm();
        else
            onCancel();
    }
   return confirmAction;
}