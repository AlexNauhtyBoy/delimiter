/**
 * Build styles
 */
require('./index.css').toString();

/**
 * Delimiter Block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */

/**
 * @typedef {Object} DelimiterData
 * @description Tool's input and output data format
 */
class Delimiter {
  /**
   * Allow Tool to have no content
   * @return {boolean}
   */
  static get contentless() {
    return true;
  }

  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: DelimiterData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */
  constructor({data, config, api}) {
    this.api = api;

    this._CSS = {
      block: this.api.styles.block,
      wrapper: 'ce-delimiter'
    };

    this._data = {};
    this._element = this.drawView();

    this.data = data;
  }

  /**
   * Create Tool's view
   * @return {HTMLElement}
   * @private
   */
  drawView() {
    let div = document.createElement('DIV');

    div.classList.add(this._CSS.wrapper, this._CSS.block);

    return div;
  }

  /**
   * Return Tool's view
   * @returns {HTMLDivElement}
   * @public
   */
  render() {
    return this._element;
  }

  /**
   * Extract Tool's data from the view
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {DelimiterData} - saved data
   * @public
   */
  save(toolsContent) {
    return {};
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.87198 7.69894H17.872V6.69894H6.87198V7.69894ZM7.87198 11.6989H6.87198V12.6989H7.87198V11.6989ZM8.87198 11.6989H9.87198V12.6989H8.87198V11.6989ZM11.872 11.6989H10.872V12.6989H11.872V11.6989ZM12.872 11.6989H13.872V12.6989H12.872V11.6989ZM15.872 11.6989H14.872V12.6989H15.872V11.6989ZM17.872 11.6989H16.872V12.6989H17.872V11.6989ZM17.872 17.6989H6.87198V16.6989H17.872V17.6989Z" fill="#212132"/></svg>`,
      title: 'divider'
    };
  }
}

module.exports = Delimiter;
