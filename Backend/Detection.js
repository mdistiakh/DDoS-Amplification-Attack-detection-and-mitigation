function GetDNSResponse(responses) {
    let suspiciousIPs = [];

    for (const response of responses) {
        const Fext = {
            IPsrc: response.IPsrc,
            IPdest: response.IPdest,
            Psrc: response.Psrc,
            Pdest: response.Pdest,
            Prot: response.Prot,
            Bytes: response.Bytes,
            QID: response.QID
        };

        if (Fext.QID > 1 || Fext.QID === 0) {
            suspiciousIPs.push(Fext.IPsrc);
        }
    }

    return { suspiciousIPs };
}

module.exports = { GetDNSResponse };
