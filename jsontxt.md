## 📑 Giới thiệu

Ứng viên sẽ dựa vào dữ liệu mẫu để tạo ra một ứng dụng tìm kiếm thông tin sản phẩm của EGANY.

Bài test không quy định hoặc giới hạn thư viện/framework ứng viên sẽ sử dụng. Tuy nhiên, ứng viên cần đáp ứng các yêu cầu sau:

- Source code phải do ứng viên tự viết (ứng viên vẫn có quyền tham khảo các giải pháp trên mạng)
- Thời gian thực hiện: 1 ngày làm việc (8 tiếng)

Sau khi hoàn thành vui lòng public source code lên [GitHub][github] hoặc [GitLab][gitlab] để phía EGANY có thể review.

## 📖 Chi tiết

### 1. Dữ liệu mẫu

Ứng viên sẽ sử dụng tập dữ liệu sau để xử lý tìm kiếm

> Vui lòng không chỉnh sửa dữ liệu mẫu

```json
{
  "products": [
    {
      "handle": "ega-botconn",
      "id": 1,
      "title": "egaBotConn",
      "vendor": "EGANY",
      "tags": "platform__cross-platform, type__apps, doc__ega-botconn, demo__https://egany.com",
      "image": {
        "id": 11,
        "src": "https://picsum.photos/id/14/600"
      },
      "variants": [
        {
          "id": 111,
          "sku": "egabotconn",
          "price": "0",
          "compare_at_price": "0",
          "inventory_management": null,
          "inventory_policy": "deny",
          "inventory_quantity": 1
        }
      ]
    },
    {
      "handle": "ega-shop",
      "id": 2,
      "title": "egaShop",
      "vendor": "EGANY",
      "tags": "platform__haravan_sapo_cross-platform, type__apps, doc__ega-shop, demo__https://egany.com",
      "image": {
        "id": 22,
        "src": "https://picsum.photos/id/15/600"
      },
      "variants": [
        {
          "id": 222,
          "sku": "egashop",
          "price": "149000",
          "compare_at_price": "199000",
          "inventory_management": null,
          "inventory_policy": "deny",
          "inventory_quantity": 1
        }
      ]
    },
    {
      "handle": "ega-countdown",
      "id": 3,
      "title": "egaCountdown",
      "vendor": "EGANY",
      "tags": "platform__haravan_cross-platform, type__apps, doc__ega-countdown, demo__https://egany.com",
      "image": {
        "id": 33,
        "src": "https://picsum.photos/id/16/600"
      },
      "variants": [
        {
          "id": 333,
          "sku": "egabotconn",
          "price": "99000",
          "compare_at_price": "149000",
          "inventory_management": "manual",
          "inventory_policy": "allow",
          "inventory_quantity": 0
        }
      ]
    },
    {
      "handle": "ega-salebox",
      "id": 4,
      "title": "egaSaleBox",
      "vendor": "EGANY",
      "tags": "platform__haravan_cross-platform, type__apps, doc__ega-salebox, demo__https://egany.com",
      "image": {
        "id": 44,
        "src": "https://picsum.photos/id/14/600"
      },
      "variants": [
        {
          "id": 444,
          "sku": "egasalebox",
          "price": "99000",
          "compare_at_price": "149000",
          "inventory_management": "manual",
          "inventory_policy": "allow",
          "inventory_quantity": -1
        }
      ]
    },
    {
      "handle": "ega-cro",
      "id": 5,
      "title": "egaCRO",
      "vendor": "EGANY",
      "tags": "platform__haravan_cross-platform_sapo, type__apps, doc__ega-salebox, demo__https://egany.com",
      "image": {
        "id": 55,
        "src": "https://picsum.photos/id/14/600"
      },
      "variants": [
        {
          "id": 555,
          "sku": "egasalebox",
          "price": "99000",
          "compare_at_price": "149000",
          "inventory_management": null,
          "inventory_policy": "deny",
          "inventory_quantity": 10
        }
      ]
    }
  ]
}
```

### 2. Input

Người dùng sẽ nhập chính xác tên sản phẩm cần tìm kiếm. Ví dụ:

- `egaCRO` --> found
- `egacRo` --> found
- `egaCRO1` --> not found

### 3. Output

Thông tin ng dụng được tìm thấy với các thông tin sau:

- Hình sản phẩm
- Tiêu đề (tên) sản phẩm
- Giá trước & sau khuyến mãi nếu có
- % giảm giá
- Trạng thái kho hàng: `Hết hàng` hoặc `<số lượng còn trong kho>`

Các thuộc tính để nhận biết sản phẩm còn hàng bao gồm:

- `inventory_management`: phương thức quản lý kho. Nếu không có đồng nghĩa với việc không quản lý kho, cho phép mua bất kể số lượng
- `inventory_policy`: cho phép đặt hàng khi kho hết hàng
- `inventory_quantity`: số lượng hàng trong kho

Giao diện (UI) trình bày tùy ý. Cho phép sử dụng các thư viện UI như [Bootstrap][bootstrap], [Foundation][foundation], ... để hỗ trợ làm giao diện

[bootstrap]: https://getbootstrap.com/
[foundation]: https://get.foundation/
[github]: https://github.com/
[gitlab]: https://about.gitlab.com/
