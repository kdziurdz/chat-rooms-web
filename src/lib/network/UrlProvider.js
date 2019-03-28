class UrlProvider {
    static getBaseUrl() {
        const envMode = process.env.NODE_ENV;

        switch (envMode) {
            case 'production': {
                return 'https://samplespring.cfapps.io';
            }
            default: {
                return 'http://localhost:8080'
            }
        }
    }

    static withBaseUrl(segments) {
        return `${this.getBaseUrl()}${segments}`;
    }

}

export default UrlProvider;