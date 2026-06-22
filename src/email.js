/**
 * 이메일 문자열이 유효한 형식인지 확인한다.
 * @param {unknown} email - 검사할 이메일
 * @returns {boolean} 유효하면 true
 */
export function isValidEmail(email) {
    return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * 사용자 목록에서 이메일 필드를 추출한다.
 * @param {Array<{ email?: unknown }>} users - 사용자 배열
 * @returns {unknown[]} 추출된 이메일 목록
 */
export function extractEmails(users) {
    if (!Array.isArray(users)) {
        return [];
    }
    return users.map(user => user.email);
}

/**
 * 사용자 목록에서 유효한 이메일만 반환한다.
 * @param {Array<{ email?: unknown }>} users - 사용자 배열
 * @returns {string[]} 유효한 이메일 목록
 */
export function getValidEmails(users) {
    return extractEmails(users).filter(isValidEmail);
}

/**
 * 사용자 목록에서 유효한 이메일만 중복 없이 반환한다.
 * @param {Array<{ email?: unknown }>} users - 사용자 배열
 * @returns {string[]} 중복이 제거된 유효한 이메일 목록
 */
export function getUniqueValidEmails(users) {
    return [...new Set(getValidEmails(users))];
}
