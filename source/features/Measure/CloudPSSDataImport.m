clear;
clc;

[fname,pname]=uigetfile('*.*','open');
filename = strcat(pname,fname);

fid = fopen(filename,'r','n','utf-8');
config = fgetl(fid);
data = fscanf(fid,'%f');
fclose(fid);


textcell = regexp(config,'<[|]>','split');

starttime = textcell{1};
tempcell = regexp(starttime, '=', 'split');
Tstart = str2double(tempcell{2});

endtime = textcell{2};
tempcell = regexp(endtime, '=', 'split');
Tend = str2double(tempcell{2});

ChannelNo = length(textcell) - 2;

dataloc = 1;
for ptr = 1: ChannelNo
    loc = ptr + 2;
    temp = textcell{loc};
    tempcell = regexp(temp, '=', 'split');
    ChannelName{ptr} = tempcell{1};
    tempNum= regexp(tempcell{2}, ',', 'split');
    ChannelSpTime(ptr) = str2double(tempNum{1});
    ChannelPointNum(ptr) = str2double(tempNum{2});
    %generate Channel
    ChNo = sprintf('Ch_%d',ptr);
    Channel{ptr} = ChNo;
    %generate Channel Name
    eval(sprintf('%s.Name = ChannelName{ptr};',ChNo));
    %initialize Channel Data
    eval(sprintf('%s.Data = zeros(ChannelPointNum(ptr),2);',ChNo));
    %generate Timeline
    deltaT = 1/ChannelSpTime(ptr);
    timeline = (Tstart + deltaT):deltaT:(Tstart + deltaT*ChannelPointNum(ptr));
    timeline = timeline.';
    eval(sprintf('%s.Data(:,1)= timeline;',ChNo));
    eval(sprintf('%s.Data(:,2)= data(dataloc:(dataloc-1)+ChannelPointNum(ptr));',ChNo));
    
    %%
    dataloc = dataloc + ChannelPointNum(ptr);
end


disp('�������!');

for ptr = 1: ChannelNo
    fprintf('Ch_%d -> %s\n',ptr,ChannelName{ptr});
end

clear Channel ChannelNo ChannelPointNum ChannelSpTime ChNo config data dataloc deltaT endtime fid filename fname loc pname ptr starttime temp tempcell tempNum Tend textcell timeline Tstart ans


