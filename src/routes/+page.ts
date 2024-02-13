
export async function load({ fetch: sfetch }) {
    const base = {body: "some text", method: "POST"}

    return {
        // ---------> body CAN NOT be read <---------
        ext_empty: await fetch("http://localhost:5173/api", {headers: {"Content-Type": ""}, ...base})
            .then(resp => resp.text()),
        // body CAN be read
        // probably partially because js/svelte injects missing/invalid headers (not applicable for external tools)
        int_any: await sfetch("/api", {headers: {"content-type": "anything"}, ...base})
            .then(resp => resp.text()),
        int_empty: await sfetch("/api", {headers: {"Content-Type": ""}, ...base})
            .then(resp => resp.text()),
        int_omitted: await sfetch("/api", {headers: {}, ...base})
            .then(resp => resp.text()),
        ext_any: await fetch("http://localhost:5173/api", {headers: {"content-type": "anything"}, ...base})
            .then(resp => resp.text()),
        ext_omitted: await fetch("http://localhost:5173/api", {headers: {}, ...base})
            .then(resp => resp.text()),
    }
}
