---
title: 下载中心
order: 600
---
这里是cloudpss的下载中心，cloudpss的相关可下载软件可以在这里找到
### 可用软件列表
<div id='download_table_container'>sdfsdf</div>
<script lang='js' id='download_script'>
console.log('sdfsdfsdfsdff');
console.log('sdfsdfsdfsdff');
const downloadTableContainer = document.getElementById('download_table_container');
downloadTableContainer.innerHTML = '';
fetch('http://10.112.10.86/download')
            .then((res) => res.json())
            .then((json) => {
const url = new window.URL(document.URL);
                const markdownContentOfAvailableDownloadList =
                    json.length > 0
                        ? json
                              .map(
                                  (item) =>
                                      `<tr> <td><a  onclick="window.open('${encodeURI(`${url.origin}/download/${item.name}`)}')">${
                                          item.name
                                      }</a></td> <td>${new Date(item.mtime).toLocaleString()}</td><td>${
                                          item.size
                                      }</td></tr>`,
                              )
                              .join('\n')
                        : '暂无可用下载';
                downloadTableContainer.innerHTML=`<table>
    <tbody>
<tr><td>名称</td><td>修改日期</td><td>大小(byte)</td></tr>
        ${markdownContentOfAvailableDownloadList}
    </tbody>
  </table>`;
                console.log(markdownContentOfAvailableDownloadList);
this.remove();
            })
            .catch((e) => {
                console.error(e);
            });
</script>
<img id='download_' src="images/logo.png" onerror="eval(document.querySelector('#download_script').innerText)" />
