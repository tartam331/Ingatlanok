function sendInterest(houseTitle) {
    const email = "tartam331@hengersor.hu";
    const subject = encodeURIComponent("Érdeklődés");
    const body = encodeURIComponent(`Érdekelne ${houseTitle}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}