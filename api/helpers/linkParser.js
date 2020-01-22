module.exports = {
    parseHeaderLink: function (header) {
        if (header.length == 0) {
          throw new Error("Input must not be of zero length");
        }
      
        // Split parts by comma
        var parts = header.split(',');
        var link;
        parts.forEach(p => {
            if(p.match(/next/)){
                var spplitedPart = p.split(';');
                link = String(spplitedPart[0]).match(/(?<=since=)(\d+)/)[0];
            }
        });
      
        return link;
      }
}

