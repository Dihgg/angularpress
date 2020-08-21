export function sanitizeHtml(str: string) {
    return str.replace(/(<([^>]+)>)/ig, '');
}
