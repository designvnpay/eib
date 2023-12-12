const item = '.item';
const list = '.list';

const check = function (el) {
  const $this = $(el);
  checkChildren($this);
  checkParent($this);
};

const checkChildren = el => {
  const $this = $(el);
  const $child = $this.
  closest(item).
  children(list).
  find('input');
  const isCurrentCheck = $this.is(':checked');
  if (isCurrentCheck) {
    $child.prop('checked', true);
  } else {
    $child.prop('checked', false);
  }
};

const checkParent = el => {
  const $this = $(el);
  const $parent = $this.closest(list).parents(item).children('label').children('input');
  $.makeArray($parent).map(parent => checkSelf(parent));
};

const checkSelf = el => {
  const $this = $(el);
  const $children = $this.
  closest(item).
  children(list).
  children(item).
  children('label').
  children('input'); // Direct children
  const isAllChildrenChecked = $.makeArray($children).every(child => $(child).is(':checked'));
  const isSomeChildrenChecked = $.makeArray($children).some(child => $(child).is(':checked') || $(child).is(':indeterminate'));

  if (isAllChildrenChecked) {
    $this.prop('checked', true);
  } else {
    $this.prop('checked', false);
  }

  if (isSomeChildrenChecked && !isAllChildrenChecked) {
    $this.prop('indeterminate', true);
  } else {
    $this.prop('indeterminate', false);
  }
};

$(document).ready(function () {
  const $checkbox = $('input[type=checkbox]');
  $checkbox.on('change', function () {check(this);});
});