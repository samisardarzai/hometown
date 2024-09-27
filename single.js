
        var array, arraytwo;
        array = ['https://images.pexels.com/photos/1576938/pexels-photo-1576938.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/1484776/pexels-photo-1484776.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/628566/pexels-photo-628566.jpeg?auto=compress&cs=tinysrgb&w=800'];
        arraytwo = ['https://images.pexels.com/photos/1484776/pexels-photo-1484776.jpeg?auto=compress&cs=tinysrgb&w=800'];
        let element_pic = document.getElementById('pic');
        element_pic.setAttribute("src", arraytwo[0]);

        document.getElementById('next').addEventListener('click', (event) => {
            let element_pic2 = document.getElementById('pic');
            array.unshift(array.pop());
            element_pic2.setAttribute("src", array.slice(-1)[0]);
        });

        document.getElementById('back').addEventListener('click', (event) => {
            let element_pic3 = document.getElementById('pic');
            array.unshift(array.pop());
            element_pic3.setAttribute("src", array.slice(-1)[0]);
        });
   
