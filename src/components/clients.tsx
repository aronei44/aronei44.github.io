import { clients } from "../lib/clients";

export function Clients() {
    return (
        <section className="border-y bg-muted/30">
            <div className="container mx-auto px-4 py-16">

                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="flex h-24 items-center justify-center rounded-lg border bg-background p-4"
                            style={{
                                backgroundColor: client.color || undefined
                            }}
                        >
                            {client.logo ? (
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    style={{ width: 'auto', height: 40 }}
                                    className="object-contain"
                                />
                            ): (
                                <p className="text-lg font-bold">{client.name}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}