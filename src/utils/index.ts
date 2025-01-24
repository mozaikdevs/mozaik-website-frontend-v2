export const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

export const truncateDetails = (details: string, charLimit: number) => {
    if (details.length > charLimit) {
        return details.slice(0, charLimit) + '...';
    }
    return details;
};
