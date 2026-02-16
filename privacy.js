class PrivacyScanner {
    constructor() {
        this.patterns = [
            {
                type: 'Email',
                regex: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g,
                severity: 'medium'
            },
            {
                type: 'IP Address',
                regex: /\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b/g,
                severity: 'low'
            },
            {
                type: 'Credit Card',
                regex: /\b(?:\d{4}[ -]?){3}\d{4}\b/g,
                severity: 'high'
            },
            {
                type: 'AWS Key',
                regex: /\bAKIA[0-9A-Z]{16}\b/g,
                severity: 'critical'
            },
            {
                type: 'OpenAI Key',
                regex: /\bsk-[a-zA-Z0-9]{20,}T3BlbkFJ\b/g,
                severity: 'critical'
            },
            {
                type: 'Generic API Key',
                regex: /\b(?:sk|ghp|gho|xoxb|xoxp)-[a-zA-Z0-9]{20,}\b/g,
                severity: 'critical'
            },
            {
                type: 'SSN (US)',
                regex: /\b\d{3}-\d{2}-\d{4}\b/g,
                severity: 'critical'
            }
        ];
    }

    scan(text) {
        const findings = [];
        this.patterns.forEach(pattern => {
            let match;
            pattern.regex.lastIndex = 0; 
            const re = new RegExp(pattern.regex);
            while ((match = re.exec(text)) !== null) {
                findings.push({
                    type: pattern.type,
                    value: match[0],
                    index: match.index,
                    severity: pattern.severity
                });
            }
        });
        return findings;
    }
}
window.PrivacyScanner = PrivacyScanner;
