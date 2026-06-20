
export const clients = [
    {
        id: "disdik",
        name: "Dinas Pendidikan Provinsi Jawa Barat",
        logo: "/client/disdik.png",
        color: "#1565c0"
    },
    {
        id: "isi",
        name: "Ihsan Solusi Informatika",
        logo: "/client/ihsan.png",
        color: "#001739"
    },
    {
        id: "net",
        name: "Bank Aladin Syariah",
        logo: "/client/aladin.png",
    },
    {
        id: "ap",
        name: "Action Pay",
        logo: "/client/actionpay.png",
    },
    {
        id: "bjbs",
        name: "BJB Syariah",
        logo: "/client/bjbs.png",
    },
    {
        id: "jda",
        name: "Jabar Digital Academy",
        logo: "/client/jda.webp",
    },
    {
        id: "bcas",
        name: "BCA Syariah",
        logo: "/client/bcas.png",
    },
    {
        id: "pos",
        name: "POS Indonesia",
        logo: "/client/pos.webp",
        color: "#e5e7eb"
    },
    // {
    //     id: "bpkh",
    //     name: "BPKH",
    //     logo: "/client/bpkh.png",
    // },
    // {
    //     id: "bri",
    //     name: "BRI",
    //     logo: "/client/bri.png",
    // },
    {
        id: "aite",
        name: "AITE",
        logo: "/client/aite.png",
    },
    {
        id: "edubox",
        name: "EduBox",
    },
];

export const getClients = (ids: string[]) => {
    return clients.filter(client => ids.includes(client.id))
}