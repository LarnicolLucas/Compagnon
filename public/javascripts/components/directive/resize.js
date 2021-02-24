const resizedirective =  {
    inserted: function (el, binding) {
      let f = function (evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener('resize', f)
        }
      }
      window.addEventListener('resize', f)
    }
  }

export default resizedirective