/**
 * 日付文字列をドット区切りにフォーマットする
 * @param {string} dateStr - 日付文字列 (例: "2025-12-01", "2025-12")
 * @returns {string} フォーマット済み日付 (例: "2025.12.01", "2025.12")
 */
export function formatDate(dateStr) {
  if (!dateStr) return "";
  return dateStr.replace(/-/g, ".");
}

/**
 * カテゴリのスラッグから表示ラベルを取得する
 * @param {string} category - カテゴリスラッグ
 * @returns {string} 表示ラベル
 */
export function getCategoryLabel(category) {
  const labels = {
    "chrome-extension": "Chrome拡張",
    "web-service": "Webサービス",
    "desktop-app": "デスクトップアプリ",
    "mobile-app": "モバイルアプリ",
    "website": "Webサイト",
    "other": "その他",
  };
  return labels[category] || category;
}

/**
 * 外部リンクの表示テキストを生成する
 * @param {string} url - URL
 * @param {string} category - カテゴリスラッグ
 * @returns {string} 表示テキスト
 */
export function getLinkText(url, category) {
  if (category === "chrome-extension") {
    return "Chrome Web Storeで見る";
  }
  try {
    const hostname = new URL(url).hostname;
    return hostname.replace("www.", "");
  } catch {
    return "サイトを見る";
  }
}

/**
 * 日付から年を取得する
 * @param {string} dateStr - 日付文字列 (例: "2025-12-01")
 * @returns {string} 年 (例: "2025")
 */
export function getYear(dateStr) {
  if (!dateStr) return '';
  return dateStr.split('-')[0];
}

/**
 * 日付から月.日を取得する（ゼロなし）
 * @param {string} dateStr - 日付文字列 (例: "2025-12-01")
 * @returns {string} 月.日 (例: "12.1")
 */
export function getMonthDay(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length >= 3) {
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    return `${month}.${day}`;
  }
  return parts[1] || '';
}


/**
 * Writingカテゴリのラベルを取得
 * @param {string} category - カテゴリ値
 * @returns {string} 表示ラベル
 */
export function getWritingCategoryLabel(category) {
  const labels = {
    'product': '作ったもの',
    'thought': '思ったこと'
  };
  return labels[category] || category;
}
